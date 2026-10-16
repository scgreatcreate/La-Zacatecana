# Local, free background removal for menu photos (rembg + ONNX, CPU).
# Usage: .venv/bin/python -I scripts/rembg_batch.py <model> <out_dir> <file> [<file> ...]
import sys, os, time
from rembg import remove, new_session
from PIL import Image
model, out_dir, files = sys.argv[1], sys.argv[2], sys.argv[3:]
os.makedirs(out_dir, exist_ok=True)
sess = new_session(model)
for f in files:
    t = time.time()
    im = Image.open(f).convert('RGBA')
    res = remove(im, session=sess, alpha_matting=False, post_process_mask=True)
    name = os.path.splitext(os.path.basename(f))[0] + '.png'
    res.save(os.path.join(out_dir, name))
    print(f'{name} {im.size} {time.time()-t:.1f}s', flush=True)
