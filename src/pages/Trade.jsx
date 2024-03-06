import TradeFilter from "../components/TableFilter/TradeFilter";
import { data } from "../components/data";

function Trade() {
  return (
      <div>
        <TradeFilter data={data} />
      </div>
  );
}

export default Trade;
