local PANEL = {}


function PANEL:Init()

--    self:DockPadding(8, 8, 8, 8)

--    self.mainPanel = self:Add("Panel")

--    self.controls = self.mainPanel:Add("Panel")

--    self.inputBox = self.mainPanel:Add("DTextEntry") 


--    self.mainPanel:Dock(FILL)

--    self.inputBox:Dock(BOTTOM)
--    self.controls:Dock(BOTTOM)

--    self.submitButton = self.controls:Add("DButton")

--    self.submitButton:SetText("Submit")
--    self.submitButton:Dock(FILL)


end


vgui.Register("createMessageGUI", PANEL, "GMessage.Frame")


