const renderMarkdownHyperlink = (message) => {
  const lines = message.split("\n");
  const parsedText = lines.map((line, index) => {
    const parts = line.split(/\[(.*?)\]\((.*?)\)/); // 정규 표현식으로 하이퍼링크를 추출

    return parts.map((part, idx) => {
      if (idx % 3 === 1) {
        return (
          <a key={idx} href={parts[idx + 1]}>
            {part}
          </a>
        );
      } else if (idx % 3 === 2) {
        return "";
      } else {
        return part;
      }
    });
  });
  return parsedText.map((text, index) => <p key={index}>{text}</p>);
};

export default renderMarkdownHyperlink;
