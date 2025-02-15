GMessage.UI.Tests.Frame = function()
    local frame = vgui.Create("GMessage.Frame")
    frame:SetSize(800, 600)
    frame:Center()
    frame:MakePopup()
    frame:SetTitle("GMessage")

end

concommand.Add("gmsg_create", GMessage.Tests.Frame)