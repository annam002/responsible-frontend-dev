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
    { id: 0, imageId: "f001", name: "Baumwollsocke 'Jessica'", description: "In dieser Socke fühlen Sie sich wohl. Sie ist aus weicher Baumwolle.",
      category: Category.FEMALE, sizes: [36, 37, 38, 39, 40], color: Color.PINK, price: 6.99 },
    { id: 1, imageId: "f002", name: "Baumwollsocke 'Jessica (geringelt)'", description: "In dieser Socke fühlen Sie sich wohl. Sie ist aus weicher Baumwolle. Die Ringel geben ihr ein verspieltes Aussehen.",
        category: Category.FEMALE, sizes: [36, 37, 38, 39, 40], color: Color.PINK, price: 7.99 },
    { id: 2, imageId: "f003", name: "Sportsocke 'Active'", description: "Die Sportsocke aus weicher Baumwolle sorgt für einen angenehmen Komfort beim Sport. Feuchtigkeit wird zuverlässig aufgesaugt.",
        category: Category.FEMALE, sizes: [36, 37, 38, 39, 40], color: Color.GREEN, price: 10.99 },
    { id: 3, imageId: "f004", name: "Sportsocke 'Active Plus'", description: "Die Sportsocke aus weicher Baumwolle sorgt für einen angenehmen Komfort beim Sport. Feuchtigkeit wird zuverlässig aufgesaugt. Atmungsaktiv und antibakteriell dank Silber-Ionen.",
        category: Category.FEMALE, sizes: [37, 38, 39, 40], color: Color.RED, price: 11.99 },
    { id: 4, imageId: "f005", name: "Premimumsocke 'Martha'", description: "Diese Premiumsocke ist aus weicher Baumwolle mit Bambusfasern für ein super-softes Laufgefühl.",
        category: Category.FEMALE, sizes: [36, 37, 39, 40], color: Color.BLACK, price: 9.99 },
    { id: 5, imageId: "f006", name: "Premimumsocke 'Martha (geringelt)'", description: "Diese Premiumsocke ist aus weicher Baumwolle mit Bambusfasern für ein super-softes Laufgefühl. Die Ringel geben ihr ein verspieltes Aussehen",
        category: Category.FEMALE, sizes: [36, 40], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
    { id: 6, imageId: "f007", name: "Businessocke 'Angela'", description: "Die Businessocke ist Ihre zuverlässige Begleitung für einen langen Tag im Büro. Aus strapazierfähiger Baumwolle.",
        category: Category.FEMALE, sizes: [36, 37, 40], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
    { id: 7, imageId: "f005", name: "Schwarze Socke", description: "Diese Premiumsocke ist aus weicher Baumwolle mit Bambusfasern für ein super-softes Laufgefühl.",
        category: Category.MALE, sizes: [40, 41, 42, 44], color: Color.BLACK, price: 9.99 },
    { id: 8, imageId: "f006", name: "Schwarze Socke (geringelt)'", description: "Diese Premiumsocke ist aus weicher Baumwolle mit Bambusfasern für ein super-softes Laufgefühl. Die Ringel betonen ihre softe Seite.",
        category: Category.MALE, sizes: [40, 42, 43, 44, 45], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
    { id: 9, imageId: "f007", name: "Schwarze Socke warm", description: "Diese Businessocke ist Ihre zuverlässige Begleitung für einen langen Tag im Büro. Aus strapazierfähiger Baumwolle.",
        category: Category.MALE, sizes: [40, 41, 42, 43, 44, 45], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
    { id: 10, imageId: "f001", name: "Baumwollsocke 'Prinzessin'", description: "Natürlich nur für Mädchen. Sie ist aus weicher Baumwolle. Sonderpreis weil pink.",
        category: Category.CHILD, sizes: [30, 31, 32, 33, 34, 35], color: Color.PINK, price: 16.99 },
    { id: 11, imageId: "f002", name: "Baumwollsocke 'Prinzessin (geringelt)'", description: "Nur für besonders verspielte Mädchen. Sie ist aus weicher Baumwolle. Sonderpreis weil pink.",
        category: Category.CHILD, sizes: [30, 31, 32, 33, 34, 35], color: Color.PINK, price: 17.99 },
    { id: 12, imageId: "f005", name: "Baumwollsocke 'Cool'", description: "Natürlich nur für coole Jungs. Sie ist aus weicher Baumwolle.",
        category: Category.CHILD, sizes: [32, 33, 34, 35, 36, 37], color: Color.BLACK, price: 9.99 },
    { id: 13, imageId: "f007", name: "Baumwollsocke 'Cool +'", description: "Nur für die extra-coolen Jungs. Sie ist aus weicher Baumwolle.",
        category: Category.CHILD, sizes: [32, 33, 34, 35, 36, 37], color: Color.BLACK, price: 10.99, salePrice: 8.99 },
] as Sock[];
