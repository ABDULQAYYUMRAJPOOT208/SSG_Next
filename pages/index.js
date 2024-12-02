import { getPostData } from '../utility/GetPostData';

export default function Home({ postData }) {
    return (
        <div>
            <h1>{postData.data.title}</h1>
            <p>{postData.data.date}</p>
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
    );
}

export async function getStaticProps() {
    const postData = getPostData();
    return {
        props: {
            postData,
        },
    };
}
