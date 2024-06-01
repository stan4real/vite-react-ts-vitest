export interface User  {
    id: number,
    attributes: {},
    groupId: number,
    calendarId: number,
    protocol: number | null,
    name: string,
    uniqueId: string,
    status: string,
    lastUpdate: string,
    positionId: number,
    phone: number | string | null,
    model: number | string | null,
    contact: number | string | null,
    category: string | null,
    disabled: boolean,
    expirationTime: string | null
}
export type Users = User[]