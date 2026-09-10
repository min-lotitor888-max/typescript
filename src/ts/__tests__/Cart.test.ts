import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart should add different types of products', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const album = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(1010, 'Inception', 1500, 'Christopher Nolan', 148);

  cart.add(book);
  cart.add(album);
  cart.add(movie);

  expect(cart.items).toEqual([book, album, movie]);
});

test('getTotalPrice should return total price of all products', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.getTotalPrice()).toBe(2900);
});

test('getTotalPriceWithDiscount should return price with discount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.getTotalPriceWithDiscount(10)).toBe(2610);
});

test('deleteById should remove product by id', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const album = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  cart.add(book);
  cart.add(album);

  cart.deleteById(1001);

  expect(cart.items).toEqual([album]);
});
