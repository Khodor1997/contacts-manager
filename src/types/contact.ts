export default interface IContact {
    id: number | null;
    name: string;
    email: string;
    phone: string;
    address?: string;
    message?: string;
    isFavorite: boolean;
    img?: string;
}