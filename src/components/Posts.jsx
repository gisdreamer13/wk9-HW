import Post from "./Post"

export const Posts = () => {

    const posts = [
        {
            "body": "Lets get this app going!!",
            "id": "3",
            "user": {
                "email": "yourmom@yourmom101.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "yo_momma101"
            }
        }
    ]

  return (
    <>
    {posts.length > 0 ? posts.map((post) => {
        return <Post key={post.id} post={post} />
      }) : <p>No Posts to Display</p>}
    </>
  )
}

