import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

const Comment = () => {
	const [ commentList, setCommentList ] = useState([]);
	const [ commentInput, setCommentInput ] = useState('');

	const addComment = e => {
		e.preventDefault();
		setCommentList([ ...commentList, commentInput ]);
		setCommentInput('');
	};

	return (
		<Fragment>
			<div className='textWrapper'>
				<p>
					<span>응원</span> 한마디
				</p>
				<p>전체 {commentList.length}개</p>
			</div>
			<CommentContainer>
				{commentList.map((comment, idx) => <li key={comment + idx}>{comment}</li>)}
			</CommentContainer>
			<CommentInputContainer onSubmit={addComment}>
				<CommentInput onChange={e => setCommentInput(e.target.value)} value={commentInput} />
				<button type='submit'>남기기</button>
			</CommentInputContainer>
		</Fragment>
	);
};

const CommentContainer = styled.ul`
	width: 90%;
	height: 100%;
	text-align: center;
	font-size: 1rem;
	line-height: 2rem;
	margin-top: 10px;
`;

const CommentInputContainer = styled.form`
	width: 90%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(0, 0, 0, 0.1);

	button {
		width: 50px;
		height: 30px;
		margin-left: 10px;
		color: #fff;
		border: none;
		border-radius: 5px;
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

const CommentInput = styled.input`
	width: 200px;
	height: 50px;
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	margin-bottom: 20px;
	font-size: 1.2rem;
`;

export default Comment;
