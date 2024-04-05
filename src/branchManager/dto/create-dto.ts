// import { Category } from '../schemas/book.schema';

export class CreateBranchManagerDto {
  readonly itemName: string;
  readonly itemCode: string;
  readonly quantity: string;
  readonly supply: string;
  readonly date: string;
  readonly unitPrice: string;
  readonly sellPrice: string;
  readonly action: string;
}
