

function viewMessage(message, apprasials)
    local frame = vgui.Create("GMessage.Frame")

    local currTheme = currentTheme()
    
    frame:SetSize(800, 200)
    frame:Center()
    frame:MakePopup()
    frame:SetTitle("View Message")

    local mainContent = frame:Add("Panel")
    mainContent:Dock(FILL)

    mainContent:DockPadding(10, 10, 10, 10)

    local messageControls =  mainContent:Add("Panel")
    messageControls:Dock(BOTTOM)
    messageControls:SetWidth(25)
    messageControls:DockMargin(200, 20, 200, 0)


    local upvoteButton = GMessage.UI.Components.Button("primary")
    local downvoteButton = GMessage.UI.Components.Button("warning")

    downvoteButton:Dock(RIGHT)
    downvoteButton:SetText("Downvote")


    upvoteButton:Dock(LEFT)
    upvoteButton:SetText("Upvote")

    upvoteButton.DoClick = function(pn1)
        frame:Remove()
    end

    messageControls:Add(upvoteButton)
    messageControls:Add(downvoteButton)


    surface.CreateFont("GMessage.Message.Font", {
        font = "Arial", -- Use the font-name which is shown to you by your operating system Font Viewer.
        extended = false,
        size = 48,
        weight = 500
    })

    
    surface.CreateFont("GMessage.Message.Apprasial.Font", {
        font = "Arial", -- Use the font-name which is shown to you by your operating system Font Viewer.
        extended = false,
        size = 18,
        weight = 500
    })


    local msgLabel = vgui.Create("DLabel")
    msgLabel:SetText( message )
    msgLabel:SetFont("GMessage.Message.Font")
    msgLabel:SetTextColor(currTheme.text.primary)
    msgLabel:Dock(FILL)
    msgLabel:SetContentAlignment(5)
    mainContent:Add(msgLabel)

    local apprasialText = vgui.Create("DLabel")
    apprasialText:SetText( "Apprasials " .. apprasials )
    apprasialText:SetFont("GMessage.Message.Apprasial.Font")
    apprasialText:SetTextColor(currTheme.text.primary)
    apprasialText:Dock(FILL)
    apprasialText:SetContentAlignment(2)
    mainContent:Add(apprasialText)

    return mainContent
end






-- local PANEL = {}

-- surface.CreateFont("messageFont", {
--     font = 'arial',
--     size = 24,
--     weight = 500
-- })


-- function PANEL:Init()



--     -- self:DockPadding(10, 10, 10, 10)

--     -- self.messageControls = self:Add("Panel")
--     -- self.messageControls:Dock(BOTTOM)
--     -- self.messageControls:SetWidth(25)
--     -- self.messageControls:DockMargin(200, 0, 200, 0)

--     -- self.appraiseButton = self.messageControls:Add("DButton")
--     -- self.appraiseButton:SetText("Appraise")
--     -- self.appraiseButton:Dock(RIGHT)

--     -- self.closeBtn = self.messageControls:Add("DButton")
--     -- self.closeBtn:SetText("Close")

--     -- self.closeBtn:Dock(LEFT)

--     -- self.closeBtn.DoClick = function(pn1)
--     --     self:Remove()
--     -- end



-- --     self.messageContent = self.mainContent:Add("Panel")
-- --     self.appraisalContent = self.mainContent:Add("Panel")
-- --     self.messageContent:Dock(TOP)
-- --     self.appraisalContent:Dock(BOTTOM)

-- --     self.mainContent:Dock(FILL)
-- --    -- self.mainContent:SetContentAlignment(5)

-- --     self.messageLabel = self.messageContent:Add("DLabel")


-- --     self.apprasialCountLabel = self.appraisalContent:Add("DLabel")
-- --     self.apprasialCount = self.appraisalContent:Add("DLabel")

-- --     self.apprasialCountLabel:Dock(LEFT)
-- --     self.apprasialCount:Dock (RIGHT)

-- --     self.apprasialCountLabel:SetText("Rating:")
-- --     self.apprasialCount:SetText("123")

-- --     self.apprasialCountLabel:DockMargin(0, 0 ,75, 0)

-- --     self.apprasialCount:DockMargin(75, 0, 0, 0)

-- --     self.apprasialCountLabel:Dock(FILL)
-- --     self.apprasialCount:Dock(FILL)

-- --     self.apprasialCountLabel:SetContentAlignment(5)
-- --     self.apprasialCount:SetContentAlignment(5)

-- --     self.messageLabel:SetFont("messageFont")
-- --     self.apprasialCount:SetFont("messageFont")
-- --     self.apprasialCountLabel:SetFont("messageFont")

-- --     self.messageLabel:SetContentAlignment(5)

-- --     self.messageLabel:Dock(FILL)



-- end

-- function PANEL:Close()
--     self:Remove()
-- end

-- function PANEL:PerformLayout(w, h)

-- end

-- function PANEL:Paint(w, h)

--     local ScrW = ScrW()
--     local ScrH = ScrH()

--     draw.RoundedBoxEx(6, 0, 0, w, h, Color(0, 0, 0), true, true, false, false)
    

-- end

-- vgui.Register("messageGUI", PANEL, "EditablePanel")