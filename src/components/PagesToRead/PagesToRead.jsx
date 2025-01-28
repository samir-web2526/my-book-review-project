import PropTypes from 'prop-types';
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const PagesToRead = () => {
  const data = useLoaderData() || [];
  const colors = ['#8884d8', '#82ca9d', '#ff7300', '#ff0000', '#00cc99'];

  const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
  );
  
  const TriangleBar = (props) => {
    const {
       x, y, width, height,index
    } = props;
    console.log(typeof(x,y))
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={colors[index % colors.length]} />;
  };

  return (
    <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="totalPages" shape={<TriangleBar />} />
    </BarChart>
  );
};
PagesToRead.propTypes = {
    props:PropTypes.object.isRequired,
    x:PropTypes.number.isRequired,
    y:PropTypes.number.isRequired,
    width:PropTypes.number.isRequired,
    height:PropTypes.number.isRequired,
    index:PropTypes.number.isRequired,
}
export default PagesToRead;
