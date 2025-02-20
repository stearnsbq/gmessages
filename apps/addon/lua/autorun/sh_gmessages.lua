GMessage = GMessage or {
    UI = {
        Tests = {

        },
        Components = {
            
        }
    }
}

GMessage.Dir = "gui"




function GMessage:Include(path)
    local str = self.Dir .. "/" .. path .. ".lua"

    if (CLIENT) then
        include(str)
    end

    if (SERVER) then
        AddCSLuaFile(str)
    end

end


GMessage:Include("settings/theme")

GMessage:Include("include/bshadows")

GMessage:Include("components/frame")
GMessage:Include("components/button")
GMessage:Include("components/input")
GMessage:Include("windows/create_message/create_message_frame")

GMessage:Include("windows/message/message_frame")

