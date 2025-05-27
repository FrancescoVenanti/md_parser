
import { getMd } from './utils/utils';

export default function Home() {
  const content = getMd();

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">Markdown Content</h1>
      <pre>{content}</pre>
    </main>
  );
}
