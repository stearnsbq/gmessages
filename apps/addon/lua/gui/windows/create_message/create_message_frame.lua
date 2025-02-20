local PANEL = {}

function createMessage()

    local frame = vgui.Create("GMessage.Frame")
    frame:SetSize(800, 200)
    frame:Center()
    frame:MakePopup()
    frame:SetTitle("Create Message")

    local panel = vgui.Create("panel")
    panel:Dock(FILL)
    frame:Add(panel)
    panel:DockPadding(10, 10, 10, 10)
    local input = GMessage.UI.Components.Input()

    panel:Add(input)

    local currTheme = currentTheme()

    local panelWidth, panelHeight = frame:GetSize()
    local entryWidth, entryHeight = input:GetSize()

    -- Set the position to be centered
    input:SetPos((panelWidth - entryWidth) / 2, (panelHeight - GMessage.UI.Sizes.navbar.height - entryHeight) / 2)

    local messageControls = panel:Add("Panel")
    messageControls:Dock(BOTTOM)
    messageControls:SetWidth(25)
    messageControls:DockMargin(200, 20, 200, 0)

    local createMessageButton = GMessage.UI.Components.Button("primary")
    local cancelMessageButton = GMessage.UI.Components.Button("warning")

    cancelMessageButton:Dock(RIGHT)
    cancelMessageButton:SetText("Cancel")

    createMessageButton:Dock(LEFT)
    createMessageButton:SetText("Create")

    createMessageButton.DoClick = function()

        local message = input:GetValue()

        local player = LocalPlayer()

        local postObject = getMessagePlacement(player)

        local currentMap = game.GetMap()

        postObject['message'] = message
        postObject['map'] = currentMap


        PrintTable(postObject)
        
        createNewMessage(postObject, function(result) 
            
            
    
        
        end)


    end

    messageControls:Add(createMessageButton)
    messageControls:Add(cancelMessageButton)

end
