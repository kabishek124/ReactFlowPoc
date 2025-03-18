import PaymentComponent from "../Components/PaymentComponent";
import DropdownComponent from "../Components/CurrencyDropdownComponent";
import CurrencyComponent from "../Components/CurrencyComponent";
import PaymentInterfaceComponent from "../Components/PaymentInterfaceComponent";
import InterfaceDropdownComponent from "../Components/InterfaceDropdownComponent";
import TableComponent from "../Components/TableComponent";
export const nodeTypes = {
  payment: PaymentComponent,
  currencyList: DropdownComponent,
  currency: CurrencyComponent,
  interfaceDropdown: InterfaceDropdownComponent,
  paymentInterface: PaymentInterfaceComponent,
  table: TableComponent,
};
