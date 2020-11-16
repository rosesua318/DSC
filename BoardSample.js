import React, { useState } from "react";

const BoardSample = () => {
  const [lists, setLists] = useState([
    {
      id: 0,
      title: "",
      contents: "",
    },
  ]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");
  const [nextId, setNextId] = useState(1);

  const onChangeTitle = (e) => setInputTitle(e.target.value);
  const onChangeContents = (e) => setInputContents(e.target.value);
  const onClick = () => {
    const finalList = lists.filter((list) => list.id !== 0);
    const nextLists = finalList.concat({
      id: nextId,
      title: inputTitle,
      contents: inputContents,
    });
    setNextId(nextId + 1);
    setLists(nextLists);
    setInputTitle("");
    setInputContents("");
  };
  const onRemove = (id) => {
    const nextLists = lists.filter((list) => list.id !== id);
    setLists(nextLists);
  };
  const listsList = lists.map((list) => (
    <div key={lists.id} onDoubleClick={() => onRemove(list.id)}>
      글 제목:{list.title}
      <br />
      내용:{list.contents}
    </div>
  ));
  return (
    <>
      <center>
        <input
          type="text"
          value={inputTitle}
          onChange={onChangeTitle}
          placeholder="글 제목"
        />
        <br />
        <textarea
          value={inputContents}
          onChange={onChangeContents}
          placeholder="내용"
        />
        <br />
        <button onClick={onClick}>작성하기</button>
        <br />
        <div>{nextId === 1 ? null : listsList}</div>
      </center>
    </>
  );
};
export default BoardSample;
