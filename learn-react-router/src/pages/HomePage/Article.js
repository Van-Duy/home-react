import ChildArticle from './ChildArticle';

export default function Article() {
    return (
        <div className="latest-news__list spacing">
           <ChildArticle />
           <ChildArticle />
           <ChildArticle />
        </div>
    )
}