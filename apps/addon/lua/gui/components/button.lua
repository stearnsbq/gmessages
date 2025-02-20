local PANEL = {}

GMessage.UI.Components.Button = function(type)
    local button = vgui.Create("GMessage.Button")
    button:SetType(type)

    button:SetSize(GMessage.UI.Sizes.button.width + 5, GMessage.UI.Sizes.button.height)

    button:SetTextColor(button.type.textColor)

    surface.CreateFont("GMessage.Button.Font", {
        font = "Arial", -- Use the font-name which is shown to you by your operating system Font Viewer.
        extended = false,
        size = 24,
        weight = 500
    })

    button:SetFont("GMessage.Button.Font")

    return button

end

function PANEL:Init()
    -- self.button = self:Add("DButton")

end

function PANEL:SetType(type)

    local currTheme = currentTheme()

    self.type = currTheme.button[type]

    if self.type == nil then
        self.type = currTheme.button.primary
    end

end

function PANEL:SetLabel(label)

end

function PANEL:Paint(width, height)
    local aX, aY = self:LocalToScreen()

    BSHADOWS.BeginShadow()
    if not self:IsHovered() then
        draw.RoundedBox(6, aX, aY, width, height, self.type.color)
    else
        draw.RoundedBox(6, aX, aY, width, height,
            Color(self.type.color.r / 2, self.type.color.g / 2, self.type.color.b / 2))
    end

    BSHADOWS.EndShadow(1, 1, 1)
end

vgui.Register("GMessage.Button", PANEL, "DButton")
