local PANEL = {}

GMessage.UI.Components.Input = function()
    local input = vgui.Create("GMessage.Input")

    input:SetSize(GMessage.UI.Sizes.input.width, GMessage.UI.Sizes.input.height)

    surface.CreateFont("GMessage.Input.Font", {
        font = "Arial", -- Use the font-name which is shown to you by your operating system Font Viewer.
        extended = false,
        size = 24,
        weight = 500
    })

    input:SetFont("GMessage.Input.Font")

    return input

end



function PANEL:Paint(width, height)
    surface.SetFont("GMessage.Button.Font")

    local aX, aY = self:LocalToScreen()

   BSHADOWS.BeginShadow()

    draw.RoundedBox(6, aX, aY, width, height, Color(255, 255, 255))
    
   BSHADOWS.EndShadow(1, 1, 1)


  self:DrawTextEntryText( self:GetTextColor(), self:GetHighlightColor(), self:GetCursorColor() )


end

vgui.Register("GMessage.Input", PANEL, "DTextEntry")
