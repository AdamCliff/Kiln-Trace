import { TableCell, TableRow } from "@/components/ui/table";

function PieceEntry({ piece }: any) {
  const handleDelete = async (e: any, id: any) => {
    e.preventDefault();
    console.log(e);
    console.log(id);

    try {
      const res = await fetch(`http://localhost:3000/delete-piece/${id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TableRow className="trow">
        <TableCell className=" text-black font-medium">Today</TableCell>
        <TableCell className=" text-black font-medium">{piece.title}</TableCell>
        <TableCell className=" text-black font-medium">{piece.stage}</TableCell>
        <TableCell className=" text-black font-medium">
          {piece.method}
        </TableCell>
        <TableCell className=" text-black font-medium">{piece.form}</TableCell>
        <TableCell className=" text-black font-medium">
          {piece.weight}
        </TableCell>
        <TableCell className=" text-black font-medium">
          blahxblahxblah
        </TableCell>
        <TableCell className=" text-black font-medium">
          {piece.overglaze}
        </TableCell>
        <TableCell className="text-black font-medium">
          {piece.underglaze}
        </TableCell>
        <TableCell className="text-black font-medium text-right">
          {piece.notes}
        </TableCell>
        <TableCell>
          <button
            onClick={(e) => {
              handleDelete(e, piece._id);
            }}
          >
            delete
          </button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default PieceEntry;
