import sharp from 'sharp'; import fs from 'fs'; import path from 'path';
const [dir,out,cols=9,cell=220]=process.argv.slice(2);
const files=fs.readdirSync(dir).filter(f=>/\.(png|jpe?g|webp)$/i.test(f)).sort();
const C=+cols, S=+cell, rows=Math.ceil(files.length/C);
const comps=[];
for(const [i,f] of files.entries()){
  const img=await sharp(path.join(dir,f)).resize(S,S-24,{fit:'contain',background:{r:200,g:200,b:200,alpha:1}}).flatten({background:'#c8c8c8'}).png().toBuffer();
  const label=Buffer.from(`<svg width="${S}" height="24"><rect width="100%" height="100%" fill="#222"/><text x="4" y="16" font-size="12" fill="#fff" font-family="sans-serif">${i} ${f.slice(0,28)}</text></svg>`);
  comps.push({input:img,left:(i%C)*S,top:Math.floor(i/C)*S});
  comps.push({input:label,left:(i%C)*S,top:Math.floor(i/C)*S+S-24});
}
await sharp({create:{width:C*S,height:rows*S,channels:3,background:'#888'}}).composite(comps).jpeg({quality:80}).toFile(out);
console.log(out);
