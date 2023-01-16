export class Purchase {
    constructor(private id: string, private userId: string, private productId: string, private quantity: number, private totalPrice:  number) {
      this.id = id;
      this.userId = userId;
      this.productId =  productId;
      this.quantity = quantity;
      this.totalPrice =  totalPrice;
    }
  }