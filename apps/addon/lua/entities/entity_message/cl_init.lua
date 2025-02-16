include("shared.lua")


local messageGUI = nil

function ENT:Draw()

    self:DrawModel()

end



net.Receive("onOpenMessage", function ()

    local msg = net.ReadString()
    local appraisals = net.ReadInt(32)


	messageGUI = viewMessage()


end)


net.Receive("onCloseMessage", function ()

	if messageGUI:IsValid()  then
		messageGUI:Close()
	end

end)

function GM:PreDrawHalos()
	halo.Add(ents.FindByClass("entity_message"), Color(255, 255, 255), 2, 10, 5, true, false)
end

