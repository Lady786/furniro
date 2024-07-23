import React from "react";
import { Button } from "./Button";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        variant="danger"
        className="w-10  rounded-[50%]"
        onClick={props.onDecrease}
      >
        {props.qty === 1 ? "-" : "-"}
      </Button>
      <p>{props.qty}</p>
      <Button
        className="w-10 rounded-[50%] bg-[#B88E2F]"
        variant="success"
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
