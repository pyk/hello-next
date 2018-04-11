import Layout from "../components/MyLayout"
import Link from "next/link"

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => (
    <Layout>
        <p>Hello Next.js, this is a blog</p>
        <ul>
            <PostLink id="first-post" title="First post" />
            <PostLink id="second-post" title="Second post" />
            <PostLink id="third-post" title="Third post" />
        </ul>
    </Layout>
)

export default Index