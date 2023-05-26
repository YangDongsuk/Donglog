import ListItem from "./ListItem";

export default async function List() {
  let result = [
    {
      title: "리엑트 기초",
      id: "67546ca4dee444f1b7db520edfca8bac",
    },
    {
      title: "리엑트 심화",
      id: "c78e7676288b4e1081ec35abcd9afad8",
    },
    {
      title: "리엑트 기타",
      id: "131df4bb0165449881872a40b18954f1",
    },
    {
      title: "2주차 정보의 저장(Information Storage)",
      id: "2e1c133b07b84e49ab7b302803be7ad0",
    },
    {
      title: "3주차 부동소수점",
      id: "3-184930736eea414e94b4f27007b87463",
    },
    {
      title: "연산",
      id: "1-b33d25b00cc54c4b9dd1234b38840ee8",
    },
    {
      title: "머신 레벨 프로그래밍(1)",
      id: "67546ca4dee444f1b7db520edfca8bac",
    },
    {
      title: "머신 레벨 프로그래밍(2): 컨트롤",
      id: "2-d8d68dc46e504cc19f9b78a6ff63b79c",
    },
    {
      title: "머신 레벨 프로그래밍(3): Procedures",
      id: "3-Procedures-018c68c3d5c64bcb9036a33675e21daa",
    },
  ];

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
