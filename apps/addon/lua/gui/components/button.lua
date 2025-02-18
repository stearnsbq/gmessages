local PANEL = {}


GMessage.UI.Components.Button = function(type)
    local button = vgui.Create("GMessage.Button")
    button:SetType(type)
    button:SetSize(GMessage.UI.Sizes.button.width, GMessage.UI.Sizes.button.height)

    button:SetTextColor(button.type.textColor)
    


    surface.CreateFont( "GMessage.Button.Font", {
        font = "Arial", -- Use the font-name which is shown to you by your operating system Font Viewer.
        extended = false,
        size = 18,
        weight = 500,
    } )

    button:SetFont("GMessage.Button.Font")



    return button

end



function PANEL:Init()
   -- self.button = self:Add("DButton")
    

end

function PANEL:SetType(type) 

    local currTheme = currentTheme()
    
    if type == 'primary' then
        self.type = currTheme.button.primary
    elseif type == 'secondary' then
        self.type = currTheme.button.secondary
    end


end

function PANEL:SetLabel(label)

end

function PANEL:Paint(width, height)
    local aX, aY = self:LocalToScreen()

    BSHADOWS.BeginShadow()
    draw.RoundedBox(6, aX, aY, width, height, self.type.color)
    BSHADOWS.EndShadow(1, 1, 1)
end


vgui.Register("GMessage.Button", PANEL, "DButton")
