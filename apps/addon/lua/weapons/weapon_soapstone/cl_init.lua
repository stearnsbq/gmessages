include("shared.lua")


SWEP.PrintName = "Message Writer"


SWEP.Slot = 4
SWEP.SlotPos = 1

SWEP.DrawAmmo = false

SWEP.DrawCrosshair = false





net.Receive("openCreateMessageGui", function()

    local frame = vgui.Create("GMessage.Frame")
    frame:SetSize(800, 600)
    frame:Center()
    frame:MakePopup()
    frame:SetTitle("GMessage")





end)