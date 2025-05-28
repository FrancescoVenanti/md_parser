import fs from "fs/promises";
import path from "path";

export async function getMd(): Promise<string[]> {
  const files = await getFiles();

  const contents = await Promise.all(
    files.map(async (f) => {
      const filePath = path.join(process.cwd(), "src/content", f);
      return fs.readFile(filePath, "utf8");
    })
  );

  return contents;
}

async function getFiles(): Promise<string[]> {
  const files = await fs.readdir("src/content");
  return files;
}
