// This is the Link API
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>

    <Link href="/about">
      <button>Go to About Page</button>
    </Link>

    <Link href="/about">
      <div>Link 컴퓨넌트 내부에는 a, button 이외에도 div 테그를 입력해도 리엑트 링크는 동작한다.</div>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;