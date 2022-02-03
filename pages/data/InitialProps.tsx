function InitialProps (props:any) {

    return <div>
        <p>getInitial::: {JSON.parse(props.text).text}</p>
    </div>
}

// prototype 형식으로 작성
InitialProps.getInitialProps = async ({ctx}:any) => {
    const res = await fetch('http://localhost:3000/api/testAPI')
    const posts: string = await res.text()
    console.log('posts!!!!', posts,ctx)
    return {text:posts}
}

// Next 9.3버전 이전엔 getInitialProps만으로 데이터 패치를 전부 해결했지만,
//     9.3버전부터는 getInitialProps가 getStaticProps, getStaticPath (Static Generation) /
// getServerSideProps (Server-side Rendering) 로 분화되었습니다.

// ***************비교***********
// export async function getStaticProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('http://localhost:3001/testAPI')
//     const posts: string = await res.text()
//     console.log('posts!!!!', posts)
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             posts,
//         },
//     }
// }

export default InitialProps