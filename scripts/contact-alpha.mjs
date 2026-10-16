// contact sheet for cutouts on a checker-free pastel ground
import sharp from 'sharp'; import fs from 'fs'; import path from 'path';
const [dir,out,cols=9,cell=220,bg='#f3d2db']=process.argv.slice(2);
const files=fs.readdirSync(dir).filter(f=>/\.(png|webp)$/i.test(f)).sort();
const C=+cols,S=+cell,rows=Math.ceil(files.length/C);const comps=[];
for(const [i,f] of files.entries()){
  const t=await sharp(path.join(dir,f)).trim({threshold:1}).toBuffer().catch(()=>fs.readFileSync(path.join(dir,f)));
  const img=await sharp(t).resize(S-8,S-30,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png().toBuffer();
  const label=Buffer.from(`<svg width="${S}" height="22"><rect width="100%" height="100%" fill="#222"/><text x="4" y="15" font-size="12" fill="#fff" font-family="sans-serif">${i} ${f.slice(0,30)}</text></svg>`);
  comps.push({input:img,left:(i%C)*S+4,top:Math.floor(i/C)*S+4},{input:label,left:(i%C)*S,top:Math.floor(i/C)*S+S-22});
}
await sharp({create:{width:C*S,height:rows*S,channels:3,background:bg}}).composite(comps).jpeg({quality:82}).toFile(out);
