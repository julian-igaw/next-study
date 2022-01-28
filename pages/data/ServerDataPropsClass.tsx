import React, {Component} from 'react';

class ServerDataPropsClass extends React.Component<any, any> {

    componentDidMount() {
        this.callAPI()
    }

    private callAPI = () => {
        fetch("http://localhost:3001/", {
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
                다음은 클래스형 입니다.{this.props.post}
            </div>
        );
    }
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3001/testAPI')
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