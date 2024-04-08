import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Inventory {
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
  description: string;

  @Prop()
  category: string;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
