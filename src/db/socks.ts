export enum Color {
    RED, GREEN, BLACK, PINK, ALL
}

export enum Category {
    FEMALE, MALE, CHILD
}

export interface Sock {
    id: number,
    imageId: string,
    name: string,
    description: string;
    category: Category;
    sizes: number[];
    color: Color;
    price: number;
    salePrice: number | undefined;
}

export interface SockFilter {
    category: Category | null;
    size: number | null;
    color: Color | null;
    maxPrice: number | null;
}

function matchesFilter(sock: Sock, sockFilter: SockFilter) {
    return (sockFilter.category === null || sock.category === sockFilter.category)
        && (sockFilter.size === null || sock.sizes.find(s => s === sockFilter.size) !== undefined)
        && (sockFilter.color === Color.ALL || sock.color === sockFilter.color)
        && (sockFilter.maxPrice === null || sock.price <= sockFilter.maxPrice);

}

export function getSocks(sockFilter: SockFilter) {
    return socks.filter(sock => matchesFilter(sock, sockFilter));
}

const socks = [
    { id: 0, imageId: "f001", name: "Cotton sock 'Jessica'", description: "This pink sock is very comfy. Consists of soft, biological cotton.",
      category: Category.FEMALE, sizes: [36, 37, 38, 39, 40], color: Color.PINK, price: 6.99 },
    { id: 1, imageId: "f002", name: "Cotton sock 'Jessica (curled)'", description: "This pink sock is very comfy. Consists of soft, biological cotton. The curls enhance your playful side.",
        category: Category.FEMALE, sizes: [36, 37, 38, 39, 40], color: Color.PINK, price: 7.99 },
    { id: 2, imageId: "f003", name: "Sports sock 'Active'", description: "Green sports sock made from soft cotton. Supports your active lifestyle. Reliably absorps dampness.",
        category: Category.FEMALE, sizes: [36, 37, 38, 39, 40], color: Color.GREEN, price: 10.99 },
    { id: 3, imageId: "f004", name: "Sports sock 'Active Plus'", description: "Red sports sock made from soft cotton. Supports your active lifestyle. Reliably absorps dampness.",
        category: Category.FEMALE, sizes: [37, 38, 39, 40], color: Color.RED, price: 11.99 },
    { id: 4, imageId: "f005", name: "Premium sock 'Martha'", description: "Black premium sock made from soft cotton in premium colour. Additional portions of bamboo fibers make you walk very smoothly.",
        category: Category.FEMALE, sizes: [36, 37, 39, 40], color: Color.BLACK, price: 9.99 },
    { id: 5, imageId: "f006", name: "Premium sock 'Martha (geringelt)'", description: "Black premium sock made from soft cotton. Additional portions of bamboo fibers make you walk very smoothly. The curls enhance your playful side.",
        category: Category.FEMALE, sizes: [36, 40], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
    { id: 6, imageId: "f007", name: "Business sock 'Angela'", description: "This black business sock is your reliable companion during a long working day in the offcie. Made from sturdy cotton.",
        category: Category.FEMALE, sizes: [36, 37, 40], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
    { id: 7, imageId: "f005", name: "Black Sock", description: "Premium sock made from soft cotton. Additional portions of bamboo fibers make you walk very smoothly.",
        category: Category.MALE, sizes: [40, 41, 42, 44], color: Color.BLACK, price: 9.99 },
    { id: 8, imageId: "f006", name: "Black Sock (curled)'", description: "Premium sock made from soft cotton. Additional portions of bamboo fibers make you walk very smoothly. The curls enhance your playful side.",
        category: Category.MALE, sizes: [40, 42, 43, 44, 45], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
    { id: 9, imageId: "f007", name: "Black Sock (warm)", description: "The business sock is your reliable companion during a long working day in the offcie. Made from sturdy cotton.",
        category: Category.MALE, sizes: [40, 41, 42, 43, 44, 45], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
    { id: 10, imageId: "f001", name: "Cotton sock 'Princess'", description: "Pink sock, only for girls, of course! Consists of soft, biological cotton. Special price, because it's pink.",
        category: Category.CHILD, sizes: [30, 31, 32, 33, 34, 35], color: Color.PINK, price: 16.99 },
    { id: 11, imageId: "f002", name: "Cotton sock 'Princess (curled)'", description: "Pink sock, only for very playful girls! Consists of soft, biological cotton. Special price, because it's pink.",
        category: Category.CHILD, sizes: [30, 31, 32, 33, 34, 35], color: Color.PINK, price: 17.99 },
    { id: 12, imageId: "f005", name: "Cotton sock 'Cool'", description: "Black sock for the cool boys. Consists of soft, biological cotton.",
        category: Category.CHILD, sizes: [32, 33, 34, 35, 36, 37], color: Color.BLACK, price: 9.99 },
    { id: 13, imageId: "f007", name: "Cotton sock 'Cool +'", description: "Black sock for the extra-cool boys. Consists of soft, biological cotton.",
        category: Category.CHILD, sizes: [32, 33, 34, 35, 36, 37], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
] as Sock[];
