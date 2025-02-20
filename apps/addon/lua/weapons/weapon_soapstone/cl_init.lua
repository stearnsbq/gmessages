include("shared.lua")


SWEP.PrintName = "Message Writer"


SWEP.Slot = 4
SWEP.SlotPos = 1

SWEP.DrawAmmo = false

SWEP.DrawCrosshair = false





net.Receive("openCreateMessageGui", function()

    local frame = createMessage()

end)