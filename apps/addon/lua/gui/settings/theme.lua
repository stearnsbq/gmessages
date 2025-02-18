CreateClientConVar("gmessages_ui_theme", "light", true, false)

GMessage.UI.Themes = {
    Light = {
        primary = Color(196, 200, 205),
        background = Color(232, 228, 240),
        closeBtn = Color(25, 25, 25),
        text = {
            primary = Color(12, 12, 12)
        },
        button = {
            primary = {
                color = Color(36,160,237),
                textColor = Color(255, 255, 255)
            },
            secondary = {
                color =  Color(0, 0, 0),
                textColor = Color(255, 255, 255)
            },
    
        }
    },
    Dark = {
        primary = Color(45, 45, 50),
        background = Color(18, 18, 20),
        closeBtn = Color(200, 200, 200),
        text = {
            primary = Color(240, 240, 240)
        },
        button = {
            primary = {
                color = Color(36, 160, 237),
                textColor = Color(255, 255, 255)
            },
            secondary = {
                color = Color(50, 50, 50),
                textColor = Color(255, 255, 255)
            },
        }
    },
    HighContrast = {
        primary = Color(20, 20, 20),
        background = Color(0, 0, 0),
        closeBtn = Color(255, 50, 50),
        text = {
            primary = Color(255, 255, 255)
        },
        button = {
            primary = {
                color = Color(0, 102, 204),
                textColor = Color(255, 255, 255)
            },
            secondary = {
                color = Color(100, 100, 100),
                textColor = Color(255, 255, 255)
            },
        }
    }
}


GMessage.UI.Sizes = {
    navbar = { 
        height = 48
    },
    button = {
        height = 32,
        width = 64
    }
}


function currentTheme()
    local selectedTheme = GetConVar("gmessages_ui_theme"):GetString()

    if selectedTheme == 'light' then
        return GMessage.UI.Themes.Light
    elseif selectedTheme == 'dark' then
        return GMessage.UI.Themes.Dark
    elseif selectedTheme == 'highContrast' then

        return GMessage.UI.Themes.HighContrast
    end

end