import React, {Component} from 'react';

class ServerDataPropsClass extends React.Component<any, any> {

    componentDidMount() {
        this.callAPI()
    }

    // static async getStaticProps() {
    //     const res = await fetch('http://localhost:3001/testAPI')
    //     const posts:string = await res.text()
    //     return{post:posts}
    // }

    private callAPI = () => {
        fetch("http://localhost:3000/api/testAPI", {
            // mode:'no-cors',
            // contentType:'text/plain'
        }).then(res => {
            console.log("@@",res)
            return res.text()
        }).then(res => this.complete(res)).catch(reason => console.log('err',reason))
    }

    private complete = (res:any) => {
        console.log("RESPONSE:::::",res)
    }

    render() {
        return (
            <div>
                <h1>클래스 컴포넌트 입니다.</h1>
                <p>모든 props는 다음과 같습니다.::: {JSON.stringify(this.props)}</p>
                <p>서버로 부터 받아왔습니다.{JSON.parse(this.props.posts).text}</p>
            </div>
        );
    }
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/testAPI')
    const posts:string = await res.text()
    console.log('posts!!!!',posts)
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

export default ServerDataPropsClass;