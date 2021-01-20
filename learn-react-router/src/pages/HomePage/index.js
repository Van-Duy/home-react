import './HomePage.css';
import './article-item.css';
import Container from '../../common/Container';
import MainTitle from './MainTitle';
import Article from './Article';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div>
      <div className="latest-news section">
        <Container>
          <MainTitle />
          <Article />
        </Container>
      </div>
    </div>
  ) 
} 
   