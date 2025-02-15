AddCSLuaFile("cl_init.lua")
AddCSLuaFile("shared.lua")

include("shared.lua")

util.AddNetworkString("onOpenMessage")
util.AddNetworkString("onCloseMessage")




function ENT:SetupDataTables()
    self:NetworkVar("String", 0, "Message")
    self:NetworkVar("Int", 1, "Appraisals")
end


function ENT:Initialize()

    self:SetModel("models/hunter/plates/plate1x1.mdl")
    self:PhysicsInit(SOLID_VPHYSICS)
    self:SetMoveType(MOVETYPE_NOCLIP)
    self:SetSolid(SOLID_VPHYSICS)
    self:SetUseType(SIMPLE_USE)


    net.WriteEntity(self)
    net.Broadcast()


end




function ENT:AcceptInput(name, caller, activator)  
    print(name)
	if name == "Use" and caller:IsPlayer() then
		net.Start("onOpenMessage") 
        net.WriteString(self:GetMessage())
        net.WriteInt(self:GetAppraisals(), 32)
        net.Send(caller)
	end
end

function ENT:StartTouch(caller)

    if caller:IsPlayer() then

        net.Start("onOpenMessage") 
        net.WriteString(self:GetMessage())
        net.WriteInt(self:GetAppraisals(), 32)
        net.Send(caller)

    end


end


function ENT:EndTouch(caller)

    if caller:IsPlayer() then
        net.Start("onCloseMessage")
        net.Send(caller)
    end


end