export interface IChamp {
    date: string
    scoreHome: string
    scoreGuest: string
    homeLogo: string
    homeTeam: string
    homeCity: string
    guestLogo: string
    guestTeam: string
    guestCity: string
    value: string
    photo: string
    video: string
    league: string
    place: string
    _id: string
}

export interface ITeam {
    wins: number
    games: number
    score: number
    goalBall: number
    missBall: number
    loss: number
    winsOverTime: number
    loseOverTime: number
    league: string
    season: string
    nameTeam: string
    logoTeam: string
    _id: string
}

export interface IClubResponse {
    message: string
}

