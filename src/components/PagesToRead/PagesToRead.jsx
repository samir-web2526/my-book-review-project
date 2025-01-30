import { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { BookContext } from "../ContextBook/ContextBook";

const PagesToRead = () => {

  const { filterReadListedBooks } = useContext(BookContext) || [];
  console.log(filterReadListedBooks)
  console.log(filterReadListedBooks.length)
  
  const colors = ["#8884d8", "#82ca9d", "#ff7300", "#ff0000", "#00cc99"];

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { x, y, width, height, index } = props;
    return (
      <path
        d={getPath(x, y, width, height)}
        stroke="none"
        fill={colors[index % colors.length]}
      />
    );
  };

  return (
    <div className="flex justify-center mt-20">
      <BarChart
        width={600}
        height={300}
        data={filterReadListedBooks}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalPages" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

export default PagesToRead;
