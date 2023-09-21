import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('categories/:id/products/:productId')
  getProductsCategory(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return { message: `product ${productId} and ${id}` };
  }
}
