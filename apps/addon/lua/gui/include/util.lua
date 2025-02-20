function getMessagePlacement(player)

    local playerPos = player:GetPos()

    local tr = util.TraceLine({
      start = playerPos,
      endpos = Vector(playerPos.x, playerPos.y, playerPos.z - 100000000)
    })  

    
    local placementVec = tr.HitPos - Vector(0, 0, 1.49)

    local playerAngles = player:GetAngles();

    local angle = tr.HitNormal:Angle()

	angle:RotateAroundAxis(tr.HitNormal:Angle():Right(), -90)
    
	angle:RotateAroundAxis(tr.HitNormal:Angle():Forward(), 180 + playerAngles.yaw)

PrintTable({posX = placementVec.x, posY = placementVec.y, posZ = placementVec.z, rotX = angle.pitch, rotY = angle.yaw, rotZ = angle.roll})

    return {posX = placementVec.x, posY = placementVec.y, posZ = placementVec.z, rotX = angle.pitch, rotY = angle.yaw, rotZ = angle.roll}
end