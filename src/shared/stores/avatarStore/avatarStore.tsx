import { makeAutoObservable } from "mobx";

class AvatarStore {
    avatar: string | null = null;

    constructor() { makeAutoObservable(this) };

    setAvatar(avatarUrl: string | null) {
        this.avatar = avatarUrl;
    }

    resetAvatar() {
        this.avatar = '';
    }
}

export const avatarStore = new AvatarStore();