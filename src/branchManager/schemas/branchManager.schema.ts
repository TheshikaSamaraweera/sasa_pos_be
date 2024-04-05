import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// export enum Category {
//   ADVENTURE = 'adventure',
//   FANTASY = 'fantasy',
//   HORROR = 'horror',
//   SCIENCE_FICTION = 'science fiction',
// }

@Schema({
  timestamps: true,
})
export class BranchManager {
  @Prop()
  itemName: string;
  @Prop()
  itemCode: string;
  @Prop()
  quantity: string;
  @Prop()
  supply: string;
  @Prop()
  date: string;
  @Prop()
  unitPrice: string;
  @Prop()
  sellPrice: string;
  @Prop()
  action: string;
}
export const BranchManagerSchema = SchemaFactory.createForClass(BranchManager);
