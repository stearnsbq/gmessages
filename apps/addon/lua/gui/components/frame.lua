local PANEL = {}

function PANEL:Init()
    self.header = self:Add("Panel")
    self.header:Dock(TOP)



    self.header.Paint = function (pnl, w, h)
        
        local currTheme = currentTheme()
        draw.RoundedBoxEx(6, 0, 0, w, h, currTheme.primary, true, true, false, false)
    end


    self.header.closeBtn = self.header:Add("DButton")
    self.header.closeBtn:SetText("Close")

    self.header.closeBtn:Dock(RIGHT)
    self.header.closeBtn.DoClick = function(pn1) self:Remove() end

    self.header.closeBtn.margin = 16

    self.header.closeBtn.Paint = function(pnl, w, h)

        local margin = pnl.margin

    
        -- surface.SetDrawColor(GMessage.UI.Theme.closeBtn)

        -- surface.DrawTexturedRect(margin, margin, w - (margin * 2), h - (margin * 2))

    end

    local currTheme = currentTheme()
    self.header.closeBtn:SetTextColor(currTheme.text.primary)


    self.header.title = self.header:Add("DLabel")
    self.header.title:Dock(LEFT)
    self.header.title:SetTextColor(currTheme.text.primary)
    self.header.title:SetTextInset(16, 0)

end

function PANEL:Close()
    self:Remove()
end


function PANEL:SetTitle(title)
    self.header.title:SetText(title)
    self.header.title:SizeToContents()
end

function PANEL:PerformLayout(width, height)
    self.header:SetTall(GMessage.UI.Sizes.navbar.height)
    self.header.closeBtn:SetWide(self.header:GetTall())
end

function PANEL:Paint(width, height)
    local aX, aY = self:LocalToScreen()

    local currTheme = currentTheme()
    

    BSHADOWS.BeginShadow()
    draw.RoundedBox(6, aX, aY, width, height, currTheme.background)
    BSHADOWS.EndShadow(1, 2, 2)
end


vgui.Register("GMessage.Frame", PANEL, "EditablePanel")