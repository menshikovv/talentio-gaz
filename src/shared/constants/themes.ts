import { default_theme, default_theme_img, night_theme, night_theme_img, katana_theme, katana_theme_img } from '../../../public/assets/background-img/img'

export const THEMES = [
    { id: 'default', name: 'Стандратная', imgThemeProfile: default_theme, imgDefault: default_theme_img },
    { id: 'night', name: 'Ночь на берегу', imgThemeProfile: night_theme, imgDefault: night_theme_img },
    { id: 'katana', name: 'Катана', imgThemeProfile: katana_theme, imgDefault: katana_theme_img }
]