import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
	return (
		<div className={s.content}>
			<div>
				My posts
				<div >
					<textarea ></textarea>
					<button>Add Post</button>
					<button>Remove</button>
				</div>
				<div className={s.posts}>
					<Post message = "Hello , world!" likeCount = "20"/>
					<Post message = "it's my first post!" likeCount="15"/>
				</div>
			</div>
		</div>
	)
}

export default MyPosts;