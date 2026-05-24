import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>页面不存在</p>
      <Link to="/" className="not-found__link">返回首页</Link>
    </div>
  );
}
